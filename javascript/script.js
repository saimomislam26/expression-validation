let myvar
let myvar1;
//define ui
let validation = document.getElementById('list');
let show = document.querySelector('.show');

let postcode = /\d{4}/
let email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
let phonevalid = /^(\+(?=880))?(880)?01[0-9]{9}$/
let password = /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{8,}$/


//event listener
validation.addEventListener('change', getSelectValue);

//function
function getSelectValue() {

    if (validation.value === 'Email') {
        show.innerHTML = `
        <div class="mb-5 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10 cont">
                    <input type="text"  class="form-control" id="staticEmail" value="" placeholder="put your email" style="font-size:1em">
                    <span class="form"> </span>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10 contpass">
                    <input type="password" class="form-control" id="inputPassword" placeholder="must be contain a special character and a numeric value upto 8 characters" style="font-size:1em">
                    <span class="form1"> </span>
                </div>
                
            </div>
            <div class="text-center"> 
            <input type="submit" class="btn btn-primary input">
            </div>
            
        `
        let input = document.querySelector('.input');
        let emailinput = document.querySelector('#staticEmail');
        let passwordinput = document.querySelector('#inputPassword')
        let form = document.querySelector('.form');
        let form1 = document.querySelector('.form1');
        input.addEventListener('click', checked);

        function checked() {

            if (email.test(emailinput.value)) {

                if (password.test(passwordinput.value)) {
                    addedpass("**Valid Password", "font-weight-bolder", "text-success")
                    emailinput.value = "";
                    passwordinput.value = "";
                }
                else {
                    addedpass("**Invalid Password", "font-weight-bolder", "text-danger")

                }
                added("**Valid Email", "font-weight-bolder", "text-success")

            }

            else {
                if (password.test(passwordinput.value)) {
                    addedpass("**Valid Password", "font-weight-bolder", "text-success")

                }
                else {
                    addedpass("**Invalid Password", "font-weight-bolder", "text-danger")

                }
                added("**Invalid Email", "font-weight-bolder", "text-danger")
            }


        }
        function added(message, className, textcol) {
            removealert();
            let span = document.createElement('span');
            span.className = `alert ${className}  ${textcol}`;
            let container = document.querySelector('.cont');
            span.appendChild(document.createTextNode(message));
            container.insertBefore(span, form);

            myvar = setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 2000);
        }
        function addedpass(message, className, textcol) {
            removealert1();
            let span = document.createElement('span');
            span.className = `alert1 ${className}  ${textcol}`;
            let container = document.querySelector('.contpass');
            span.appendChild(document.createTextNode(message));
            container.insertBefore(span, form1);

            myvar1 = setTimeout(function () {
                document.querySelector('.alert1').remove();
            }, 2000);
        }

        function removealert() {
            let currentdiv = document.querySelector('.alert');
            if (currentdiv) {
                currentdiv.remove();
            }
            clearTimeout(myvar);
        }
        function removealert1() {
            let currentdiv = document.querySelector('.alert1');
            if (currentdiv) {
                currentdiv.remove();
            }
            clearTimeout(myvar1);
        }




    }
    if (validation.value === 'Phone') {
        show.innerHTML = `
        <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Phone Number</label>
                <div class="col-sm-10 cont">
                    <input type="text"  class="form-control" id="PhoneNum" value="" style=" placeholder="Put your Phone number"font-size:1em">
                    <span class="form"> </span>
                </div>
            </div>
            <div class="text-center"> 
            <input type="submit" class="btn btn-primary input">
            </div>
            
        `
        let input = document.querySelector('.input');
        let phoneNum = document.querySelector('#PhoneNum');
        let form = document.querySelector('.form');
        input.addEventListener('click', checked);
        function checked() {

            if (phonevalid.test(phoneNum.value)) {
                phoneNum.innerHTML = ""
                added("**Valid Phone Number", "font-weight-bolder", "text-success")
            }

            else {
                added("**Invalid Phone Number", "font-weight-bolder", "text-danger")
            }
        }
        function added(message, className, textcol) {
            removealert();
            let span = document.createElement('span');
            span.className = `alert ${className}  ${textcol}`;
            let container = document.querySelector('.cont');
            span.appendChild(document.createTextNode(message));
            container.insertBefore(span, form);

            myvar = setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 2000);
        }

        function removealert() {
            let currentdiv = document.querySelector('.alert');
            if (currentdiv) {
                currentdiv.remove();
            }
            clearTimeout(myvar);
        }

    }
    if (validation.value === 'Post') {
        show.innerHTML = `
        <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Post Code</label>
        <div class="col-sm-10 cont">
            <input type="text"  class="form-control" id="post" value="" placeholder="Put your Post Code" style="font-size:1em">
            <span class="form"> </span>
        </div>
    </div>
    <div class="text-center"> 
    <input type="submit" class="btn btn-primary input">
    </div>
    
`
        let input = document.querySelector('.input');
        let post = document.querySelector('#post');
        let form = document.querySelector('.form');
        input.addEventListener('click', checked);

        function checked() {
            if (postcode.test(post.value)) {
                post.innerHTML = ""
                added("Valid Post Code", "text-success")
            }

            else {
                added("Invalid Post Code", "text-danger")
            }
        }

        function added(message, textcol) {
            removealert();
            let span = document.createElement('span');
            span.className = `alert  ${textcol}`;
            let container = document.querySelector('.cont');
            span.appendChild(document.createTextNode(message));
            container.insertBefore(span, form);

            myvar = setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 2000);
        }

        function removealert() {
            let currentdiv = document.querySelector('.alert');
            if (currentdiv) {
                currentdiv.remove();
            }
            clearTimeout(myvar);
        }
    }
}

