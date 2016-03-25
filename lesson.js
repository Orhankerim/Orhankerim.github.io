var Student = {
    'ID' : '',
    'FName' : '',
    'lname' : '',
    'courses' : [
        {'courseID':'',
            'grade':''
        }
    ],
    calcGPA : function () {
        var gpa = 0;
        for(var i=0; i<this.courses.length; i++) 
        {gpa += this.courses[i].grade;
        }
        gpa /= this.courses.length;
        return gpa;
    }
    };
    
    var s1 = Student;
    s1[0] = "10158664";
    s1['fName'] = "first";
    for(var i=0; i<5; i++) {
        s1['courses'][i] = {'courseID':'c'+i, 'grade':Math.random()*100+1};
    
    var gpa = s1.calcGPA();
    }
    s1['tel'] = "2321234567";
    
    var gpa =s1.calcGPA ();
    
    function Person (first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.yearsToLive = function (){
            return 112 - this.age;
        };
    };
    var p1 = new Person('first','last',112,'yellow');
    var p2 = new Person('first','last',12,'green'); 
 