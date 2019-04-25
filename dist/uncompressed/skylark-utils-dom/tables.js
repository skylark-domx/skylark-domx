define([
    "./dom",
    "./langx",
    "./query"
], function(dom, langx,$) {
  //TODO : don't use query

  function tables() {
      return tables;
  }

  function _changeCellTag($tr, tagName) {
    return $tr.find('td, th').each(function(i, cell) {
      var $cell;
      $cell = $(cell);
      return $cell.replaceWith("<" + tagName + ">" + ($cell.html()) + "</" + tagName + ">");
    });
  }

  function _nextRow($tr) {
    var $nextTr;
    $nextTr = $tr.next('tr');
    if ($nextTr.length < 1 && $tr.parent('thead').length > 0) {
      $nextTr = $tr.parent('thead').next('tbody').find('tr:first');
    }
    return $nextTr;
  };

  function _prevRow($tr) {
    var $prevTr;
    $prevTr = $tr.prev('tr');
    if ($prevTr.length < 1 && $tr.parent('tbody').length > 0) {
      $prevTr = $tr.parent('tbody').prev('thead').find('tr');
    }
    return $prevTr;
  }

  function createTable(row, col, phBr) {
  	var $table, $tbody, $td, $thead, $tr, c, k, l, r, ref, ref1;
  	$table = $('<table/>');
 		$thead = $('<thead/>').appendTo($table);
  	$tbody = $('<tbody/>').appendTo($table);
  	for (r = k = 0, ref = row; 0 <= ref ? k < ref : k > ref; r = 0 <= ref ? ++k : --k) {
    		$tr = $('<tr/>');
    		$tr.appendTo(r === 0 ? $thead : $tbody);
    		for (c = l = 0, ref1 = col; 0 <= ref1 ? l < ref1 : l > ref1; c = 0 <= ref1 ? ++l : --l) {
     			$td = $(r === 0 ? '<th/>' : '<td/>').appendTo($tr);
      		if (phBr) {
        			$td.append(phBr);
      		}
    		}
  	}		
  	return $table[0];
  }
    

  //cls = simditor-table
  function decorate(table,cssClasses) {
    var $table = $(table);

    var $colgroup, $headRow, $resizeHandle, $tbody, $thead, $wrapper;
    if ($table.parent('.' + cssClasses.tableDecorate).length > 0) {
      undecorate(table);
    }
    $table.wrap('<div class="' + cssClasses.tableDecorate + '"></div>');
    $wrapper = $table.parent('.' + cssClasses.tableDecorate );
    $colgroup = $table.find('colgroup');
    if ($table.find('thead').length < 1) {
      $thead = $('<thead />');
      $headRow = $table.find('tr').first();
      $thead.append($headRow);
      _changeCellTag($headRow, 'th');
      $tbody = $table.find('tbody');
      if ($tbody.length > 0) {
        $tbody.before($thead);
      } else {
        $table.prepend($thead);
      }
    }
    if ($colgroup.length < 1) {
      $colgroup = $('<colgroup/>').prependTo($table);
      $table.find('thead tr th').each(function(i, td) {
        var $col;
        return $col = $('<col/>').appendTo($colgroup);
      });
      refreshTableWidth($table);
    }
    $resizeHandle = $('<div />', {
      "class": cssClasses.resizeHandle, // 'simditor-resize-handle',
      contenteditable: 'false'
    }).appendTo($wrapper);
    return $table.parent();
  }

  function deleteTable(td,callback) {
    var $td = $(td);

    var $block, $table;
    $table = $td.closest('.simditor-table');
    $block = $table.next('p');
    $table.remove();
    if (callback) {
      callback($block);
    }
  }

  function deleteRow(td,callback) {
    var $td = $(td);

    var $newTr, $tr, index;
    $tr = $td.parent('tr');
    if ($tr.closest('table').find('tr').length < 1) {
      return deleteTable(td);
    } else {
      $newTr = _nextRow($tr);
      if (!($newTr.length > 0)) {
        $newTr = _prevRow($tr);
      }
      index = $tr.find('td, th').index($td);
      if ($tr.parent().is('thead')) {
        $newTr.appendTo($tr.parent());
        _changeCellTag($newTr, 'th');
      }
      $tr.remove();
    
      if (callback) {
        callback($newTr[0],index);
      }
      //return this.editor.selection.setRangeAtEndOf($newTr.find('td, th').eq(index));
    }
  }

  function insertRow(td, direction,phBr,callback) {
    var $td = $(td);

    var $newTr, $table, $tr, cellTag, colNum, i, index, k, ref;
    if (direction == null) {
      direction = 'after';
    }
    $tr = $td.parent('tr');
    $table = $tr.closest('table');
    colNum = 0;
    $table.find('tr').each(function(i, tr) {
      return colNum = Math.max(colNum, $(tr).find('td').length);
    });
    index = $tr.find('td, th').index($td);
    $newTr = $('<tr/>');
    cellTag = 'td';
    if (direction === 'after' && $tr.parent().is('thead')) {
      $tr.parent().next('tbody').prepend($newTr);
    } else if (direction === 'before' && $tr.parent().is('thead')) {
      $tr.before($newTr);
      $tr.parent().next('tbody').prepend($tr);
      _changeCellTag($tr, 'td');
      cellTag = 'th';
    } else {
      $tr[direction]($newTr);
    }
    for (i = k = 1, ref = colNum; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
      $("<" + cellTag + "/>").append(phBr).appendTo($newTr);
    }

    if (callback) {
      callback($newTr[0],index);
    }
  }

  function deleteCol(td,callback) {
    var $td = $(td);

    var $newTd, $table, $tr, index, noOtherCol, noOtherRow;
    $tr = $td.parent('tr');
    noOtherRow = $tr.closest('table').find('tr').length < 2;
    noOtherCol = $td.siblings('td, th').length < 1;
    if (noOtherRow && noOtherCol) {
      return deleteTable(td);
    } else {
      index = $tr.find('td, th').index($td);
      $newTd = $td.next('td, th');
      if (!($newTd.length > 0)) {
        $newTd = $tr.prev('td, th');
      }
      $table = $tr.closest('table');
      $table.find('col').eq(index).remove();
      $table.find('tr').each(function(i, tr) {
        return $(tr).find('td, th').eq(index).remove();
      });
      refreshTableWidth($table);
      //return this.editor.selection.setRangeAtEndOf($newTd);
      if (callback) {
        callback($newTd[0]);
      }
    }
  }

  function insertCol(td, direction,phBr,callback) {
    var $td = $(td);

    var $col, $newCol, $newTd, $table, $tr, index, tableWidth, width;
    if (direction == null) {
      direction = 'after';
    }
    $tr = $td.parent('tr');
    index = $tr.find('td, th').index($td);
    $table = $td.closest('table');
    $col = $table.find('col').eq(index);
    $table.find('tr').each((function(_this) {
      return function(i, tr) {
        var $newTd, cellTag;
        cellTag = $(tr).parent().is('thead') ? 'th' : 'td';
        $newTd = $("<" + cellTag + "/>").append(phBr);
        return $(tr).find('td, th').eq(index)[direction]($newTd);
      };
    })(this));
    $newCol = $('<col/>');
    $col[direction]($newCol);
    tableWidth = $table.width();
    width = Math.max(parseFloat($col.attr('width')) / 2, 50 / tableWidth * 100);
    $col.attr('width', width + '%');
    $newCol.attr('width', width + '%');
    refreshTableWidth($table);
    $newTd = direction === 'after' ? $td.next('td, th') : $td.prev('td, th');
    //return this.editor.selection.setRangeAtStartOf($newTd);
    if (callback) {
      callback($newTd[0]);
    }
  }


  function refreshTableWidth($table) {
    return setTimeout((function(_this) {
      return function() {
        var cols, tableWidth;
        tableWidth = $table.width();
        cols = $table.find('col');
        return $table.find('thead tr th').each(function(i, td) {
          var $col;
          $col = cols.eq(i);
          return $col.attr('width', ($(td).outerWidth() / tableWidth * 100) + '%');
        });
      };
    })(this), 0);
  }

  function undecorate(table) {
    var $table = $(table);
    if (!($table.parent('.simditor-table').length > 0)) {
      return;
    }
    return $table.parent().replaceWith($table)[0];
  };



  langx.mixin(tables,{
    "createTable" : createTable,
    "decorate" : decorate,
    "deleteCol" : deleteCol,
    "deleteRow" : deleteRow,
    "deleteTable" : deleteTable,
    "insertCol" : insertCol,
    "insertRow" : insertRow,
    "refreshTableWidth" : refreshTableWidth,
    "undecorate" : undecorate
  })


	return dom.tables = tables;
});