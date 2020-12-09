var app = new Vue({
  el: '.container',

  data: {
    show_cart: true,
    members:[],
    username: '',
    edit: false,
    comment: false,
    add_member: false,
  },

  methods: {
  	add_members () {
     if(this.username !== ''){
       this.members.push({
        'username': this.username,
        'edit': this.edit,
        'comment': this.comment,
        'add_member': this.add_member,
      })
      this.username = '';
     }
  	},

    delete_members(index) {
      this.members.splice(index, 1)
    }
  }

});
