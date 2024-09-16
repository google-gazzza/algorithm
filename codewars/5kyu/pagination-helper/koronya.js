// [JS][5kyu] PaginationHelper
// pagination-helper
// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
  }
  itemCount() {
    return this.collection.length
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage)
  }
  pageItemCount(pageIndex) {
    const lastPageIndex = this.pageCount() - 1
    if (pageIndex < 0 || pageIndex > lastPageIndex) {
      return -1
    }
    if (pageIndex === lastPageIndex) {
      const tempCount = this.itemCount() % this.itemsPerPage
      return tempCount === 0 ? this.itemsPerPage : tempCount
    }
    return this.itemsPerPage
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex > this.itemCount() - 1) {
      return -1
    }
    return Math.floor(itemIndex / this.itemsPerPage)
  }
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)
helper.pageCount() // should == 2
helper.itemCount() // should == 6
helper.pageItemCount(0) // should == 4
helper.pageItemCount(1) // last page - should == 2
helper.pageItemCount(2) // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5) // should == 1 (zero based index)
helper.pageIndex(2) // should == 0
helper.pageIndex(20) // should == -1
helper.pageIndex(-10) // should == -1
