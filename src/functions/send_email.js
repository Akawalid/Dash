
import emailjs, { send } from '@emailjs/browser';
const sendEmail = (list_of_users, subject, message) => {
    const list_of_objects = list_of_users.map(e => { return {
        to_name: e.name,
        to_email: e.email, 
        from_name: 'GDG_Team_12',
        message: message,
        subject: subject
    }
    });

    list_of_objects.forEach(object => {
        emailjs.send('service_4cun6o8', 'template_mcz5abg', object, 'cqN_8KtQkM--wNFuM')
            .then((result) => {
                console.log('user ' + object.to_name);
            }, (error) => {
                console.log(error);
            });
        })
};

export default sendEmail
// sendEmail([{
//     name:"CHABANE", 
//     last_name:"Oualid", 
//     email:"chabaneoualidfr@gmail.com", 
//     phone:"0666992876"
//   }], "azul", "a oualid ahrech");
