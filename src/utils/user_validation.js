const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};