export const formErrors = {
    'idCompteur': '',
    'requestPriority': '',
    'startTime': '',
    'startDate': '',
    'expireTime': '',
    'expireDate': ''
};

export const validationMessage = {
    'idCompteur': {
        'required': 'Le champs compteur est obligatoire.'
    },
    'requestPriority': {
        'required': 'Le champs priorité est obligatoire.'
    },
    'startTime': {
        'required': 'Le champs start time est obligatoire.'
    },
    'startDate': {
        'required': 'Le champs start time est obligatoire.',
        'ngbDate': 'Le format de la date start time est non valide'
    },
    'expireTime': {
        'required': 'Le champs expire time est obligatoire.'
    },
    'expireDate': {
        'required': 'Le champs expire time est obligatoire.',
        'ngbDate': 'Le format de la date expire time est non valide'
    }
};
