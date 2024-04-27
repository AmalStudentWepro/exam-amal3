let courses = [

    {
    
    title: 'SMM',
    
    howLong: 3
    
    },
    
    {
    
    title: 'Dev',
    
    howLong: 6
    
    },
    
    {
    
    title: 'Graph',
    
    howLong: 4
    
    },
    
    ]
    
    let earnings = {
    
    total: 0,
    
    max: 0,
    
    min: 0
    
    }
    
    let m = 0
    
    let w = 0
    
    let average_age = 0
    
    let smm = 0
    
    let dev = 0
    
    let graph = 0
    
    let students = [
    
    {
    
    sex: 'm',
    
    age: 14,
    
    payment: 1220000,
    
    course: {
    
    title: 'SMM',
    
    }
    
    },
    
    {
    
    sex: 'm',
    
    age: 24,
    
    payment: 1883000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 16,
    
    payment: 2190000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'm',
    
    age: 19,
    
    payment: 718000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 15,
    
    payment: 2195000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'm',
    
    age: 24,
    
    payment: 460000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 14,
    
    payment: 560000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 22,
    
    payment: 160000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'm',
    
    age: 26,
    
    payment: 883000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 26,
    
    payment: 750000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'm',
    
    age: 23,
    
    payment: 212000,
    
    course: {
    
    title: 'Graph',
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 24,
    
    payment: 883000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 27,
    
    payment: 190000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 19,
    
    payment: 210000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 21,
    
    payment: 770000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'm',
    
    age: 18,
    
    payment: 1200000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 51,
    
    payment: 880000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'm',
    
    age: 51,
    
    payment: 2430000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 33,
    
    payment: 1277000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'w',
    
    age: 21,
    
    payment: 2750000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    ]
    
    // В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*
    
    // 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*
    
    // 2. Сохранить количество девочек и мальчиков внутри переменных m и w*
    
    // 3. Сохранить заработок учебного центра в earning.total*
    
    // 4. Узнать кто больше всех платит за обучение в earning.max*
    
    // 5. Узнать кто меньше всех платит за обучение в earning.min*
    
    // 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*
    
    // 7. Посчитать средний возраст студентов в average_age*

    const setup = () => {
       
        students.forEach(student => {
            const courseInfo = courses.find(course => course.title === student.course.title);
            student.course.howLong = courseInfo.howLong;
        });
    
        
        m = students.filter(student => student.sex === 'm').length;
        w = students.filter(student => student.sex === 'w').length;
    
        
        earnings.total = students.reduce((total, student) => total + student.payment, 0);
    
        
        const payments = students.map(student => student.payment);
        earnings.max = Math.max(...payments);
        earnings.min = Math.min(...payments);
    
      
        smm = students.filter(student => student.course.title === 'SMM').length;
        dev = students.filter(student => student.course.title === 'Dev').length;
        graph = students.filter(student => student.course.title === 'Graph').length;
    
        
        average_age = students.reduce((total, student) => total + student.age, 0) / students.length;

    console.log("мужчин: ", m);
    console.log("женщин: ", w);
    console.log("заработок: ", earnings.total);
    console.log("max оплата: ", earnings.max);
    console.log("min оплата: ", earnings.min);
    console.log("на курсе SMM: ", smm);
    console.log("на курсе Dev: ", dev);
    console.log("на курсе Graph: ", graph);
    console.log("Средний возраст студентов: ", average_age);

    }
    
    setup();