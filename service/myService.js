/**
 * FileName: MyService.js
 * CreatedBy: Hamid
 * purpose : takes the data from firebase and resolve the promise
 */
angular.module("myApp")
    .service('MyService', function($base64, $localStorage) {
        var data;
        /* function used to set name and store in data variable */
        return {
            setName: function(name) {
                data = name;
            },
            /* function used to get name and return the data */
            getName: function() {
                return data;
            },
            /* function used to encrypt json obj*/
            myEncrypt: function(obj) {
                return $base64.encode(JSON.stringify(obj));
            },
            /* function used to decrypt json obj*/
            myDecrypt: function(obj) {
                return JSON.parse($base64.decode(obj));
            },
            /* function used to retrieve data from localStorage and verify the data */
            isAuth: function() {
                var data = $localStorage.LoginData;
                if (data !== undefined) {
                    var data1 = this.myDecrypt(data);
                    if (data1.email !== undefined)
                        return true
                    else
                        return false;
                } else {
                    return false;
                }
            }
        }
    });
