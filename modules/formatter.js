"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.crash1 = response => {
    console.log('crash1');
    return {
        "text":"Bonjour "+ response.first_name +" il semble que votre vaisseau connecté ait subi un accident mineur. Votre aile gauche semble endommagée. Comment puis-je vous assister?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Faire un constat digital",
            "payload":"q1,a1"
          },
          {
            "content_type":"text",
            "title":"Obtenir de l'aide",
            "payload":"q1,a2"
          }
        ]
    }
};

exports.question3 = response => {
    //moment.lang('de');
    
    var options = [
        moment().add(1, 'days').format('ddd Do MMM') + ' at 10am',
        moment().add(2, 'days').format('ddd Do MMM') + ' at 9am',
        moment().add(2, 'days').format('ddd Do MMM') + ' at 5pm',
        moment().add(3, 'days').format('ddd Do MMM') + ' at 1pm',
        moment().add(3, 'days').format('ddd Do MMM') + ' at 6pm',
    ];

    console.log('options: ', options);
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `When will you run?`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": options[0],
                        "payload": "confirm_visit," + options[0]
                    },
                    {
                        "type": "postback",
                        "title": options[1],
                        "payload": "confirm_visit," + options[1]
                    },
                    {
                        "type": "postback",
                        "title": options[2],
                        "payload": "confirm_visit," + options[2]
                    }]
            }
        }
    };
};

exports.question4 = response => {
    return {
        "text":"Are you going to run yourself?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Yes",
            "payload":"q4,Yes"
          },
          {
            "content_type":"text",
            "title":"No",
            "payload":"q4,No"
          }
        ]
    }
};

exports.question5 = response => {
    let elements = [];
        elements.push(  
            {
                title: 'SUV 2008',
                subtitle: `A partir de 16 050€ TTC. Ou 189 €/mois après un premier loyer de 4.031 €`,
                "image_url": 'https://www.dropbox.com/s/s5vk994jyufnwhy/2008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            },
            {
                title: 'SUV 3008',
                subtitle: `A partir de 25 900€ TTC. Ou 313 €/mois après un premier loyer de 6.494 €`,
                "image_url": 'https://www.dropbox.com/s/eaki20wfacq678w/3008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            },
            {
                title: 'SUV 5008',
                subtitle: `A partir de 26 400€ TTC. Ou 313 €/mois après un premier loyer de 6.618 €`,
                "image_url": 'https://www.dropbox.com/s/vtznsub4xf6bq2i/5008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            }
        );

    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};
