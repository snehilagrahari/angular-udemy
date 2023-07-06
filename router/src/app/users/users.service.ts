export class UserService{
    users = [
        {
          id: 1,
          name: 'Max'
        },
        {
          id: 2,
          name: 'Anna'
        },
        {
          id: 3,
          name: 'Chris'
        }
    ];
    
    
    getUser(id : number){
        const user = this.users.find((s)=>s.id===id);
        return user
    }
}