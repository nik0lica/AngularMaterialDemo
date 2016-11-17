/**
 * Created by Nikola on 11/15/2016.
 */
module ContactManagerApp {
    export class MainController {
        static $inject = ['userService','$mdSidenav'];

        constructor(private userService : IUserService,
        private $mdSidenav: angular.material.ISidenavService) {
            let self = this;

            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                self.users = users;
                self.selected = users[0];
                console.log(self.users);
            });
        }
        tabIndex: number = 0;
        searchText: string = '';
        users: User[] = [];
        selected: User = null;
        message: string = "Hello from our controller";

        toggleSideNav() : void {
            this.$mdSidenav('left').toggle();
        }
        selectUser (user : User) : void {
            this.selected = user;

            var sidenav = this.$mdSidenav('left');
            if(sidenav.isOpen()){
                sidenav.close();
            }
        }
    }
}