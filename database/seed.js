var seeder = require('mongoose-seed');

seeder.connect('mongodb://localhost:27017/wedding', function() {

    seeder.loadModels(['../src/guest.js']);

    seeder.clearModels(['Guest'], function() {
        seeder.populateModels(data, function() {
            console.log('Successfully entered data');
            process.exit();
        });
    });
});

var data = [
    {
        'model': 'Guest',
        'documents': [
            {
                uri: 'rolandas-ir-rimante',
                title: 'Rolandai ir Rimante',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'zita',
                title: 'Zita',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'jolanta',
                title: 'Jolanta',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'juste-ir-david',
                title: 'Justė ir David',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'darius-ir-asta',
                title: 'Dariau ir Asta',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'justas-ir-kamile',
                title: 'Justai ir Kamile',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'ainis-ir-monika',
                title: 'Aini ir Monika',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'jorimas-ir-simona',
                title: 'Jorimai ir Simona',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'sarunas-ir-ieva',
                title: 'Šarūnai ir Ieva',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'zymantas',
                title: 'Žymantai',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'motiejus',
                title: 'Motiejau',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'linas-ir-mikkela',
                title: 'Linai ir Mikkela',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'ramunas-ir-kristina',
                title: 'Ramūnai ir Kristina',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'tomas-ir-ruta',
                title: 'Tomai ir Rūta',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'armandas',
                title: 'Armandai',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'ugne-ir-mindaugas',
                title: 'Ugnė ir Mindaugai',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'aiste-ir-povilas',
                title: 'Aistė ir Povilai',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'jurga',
                title: 'Jurga',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'audre-ir-sergio',
                title: 'Audrė ir Sergio',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'medeina-ir-julius',
                title: 'Medeina ir Juliau',
                couple: true,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'monika',
                title: 'Monika',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            },
            {
                uri: 'ieva',
                title: 'Ieva',
                couple: false,
                guests: 0,
                vegetarians: 0,
                song: '',
                submitted: false
            }
        ]
    }
];
