export class paramPage {
    direction = '';
    param = '';
    status = '';
    size = 20;
    page = 1;
    type = '';
    search = '';

    copy() {
      const copy = new paramPage();
      copy.direction = this.direction;
      copy.param = this.param;
      copy.status = this.status;
      copy.size = this.size;
      copy.page = this.page;
      copy.type = this.type;
      copy.search = this.search;
      return copy;
    }

  }
