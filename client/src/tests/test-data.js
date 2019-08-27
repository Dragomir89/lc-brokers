import moment from 'moment';

export const offer = {
    constructionTypeId: '',
    propertyTypeId: '',
    propertyType: '',
    state: '',
    neighborhoodId: '',
    price: '',
    area: '',
    description: '',
    floor: '',
    number: '',
    address: '',
    info: '',
    propertyOwnerName: '',
    phoneNumbers: [],
    phoneNumber: '',
    lastCall: '2018-10-09T13:57:31.951Z',
    nextCall: '2018-10-09T13:57:31.951Z'
}

export const addModalData = {
    "phoneNumbers": ["1111", "2222", "3333"],
    "isDeleted": false,
    "deletedOn": "2019-05-01T11:02:50.091Z",
    "_id": "5bbcb3cc2a05d4701402868b",
    "constructionType": "НОВО",
    "propertyType": "ЧЕТЕРИСТАЕН",
    "stateVal": "НАЕТ",
    "neighborhood": "ЛОЗЕНЕЦ",
    "number": 1,
    "area": 40,
    "description": "",
    "phoneNumber": "1111",
    "price": 400,
    "address": "UPDATE_0001",
    "floor": 6,
    "info": "",
    "propertyOwnerName": "тест",
    "addedOn": "2018-10-09T13:57:31.951Z",
    "addedFrom": null,
    "nextCall": "2018-10-09T13:57:31.951Z",
    "lastCall": "2018-10-09T13:57:31.951Z",
    "offerPostStatus": null
}

export const offers = [
    {
        "phoneNumbers": ["1111", "2222", "3333"],
        "isDeleted": false,
        "deletedOn": "2019-05-01T11:02:50.091Z",
        "_id": "5bbcb3cc2a05d4701402868b",
        "constructionTypeId": { "_id": "5b8938ee4ddb4d0cec841765", "value": "НОВО", "__v": 0 },
        "propertyTypeId": { "_id": "5b73dbbc629e121768144d6b", "value": "ЧЕТЕРИСТАЕН", "__v": 0 },
        "state": { "_id": "5b1a81797561bd1310b9b244", "value": "НАЕТ", "__v": 0 },
        "neighborhoodId": { "_id": "5b1a81947561bd1310b9b249", "value": "ЛОЗЕНЕЦ", "__v": 0 },
        "number": 1,
        "area": 40,
        "description": "",
        "phoneNumber": "1111",
        "price": 400,
        "address": "UPDATE_0001",
        "floor": 6,
        "info": "",
        "propertyOwnerName": "тест",
        "addedOn": "2018-10-09T13:57:31.951Z",
        "addedFrom": null,
        "nextCall": "2018-10-09T13:57:31.951Z",
        "lastCall": "2018-10-09T13:57:31.951Z", "__v": 0
    },
    {
        "phoneNumbers": ["56789", "098765"],
        "isDeleted": false,
        "deletedOn": "2019-05-01T08:49:12.345Z",
        "_id": "5cc94d8a776b203dfc2720ca",
        "constructionTypeId": { "_id": "5b8939094ddb4d0cec841769", "value": "ТУХЛА", "__v": 0 },
        "propertyTypeId": { "_id": "5b73e2c8ead7291d20256485", "value": "МЕЗОНЕТ", "__v": 0 },
        "state": { "_id": "5bab632fd29aaf428ce3d54b", "value": "TEST", "__v": 0 },
        "neighborhoodId": { "_id": "5b73dbbc629e121768144d6c", "value": "ИВАН ВАЗООВ", "__v": 0 },
        "number": 123321,
        "area": 123,
        "description": "test",
        "phoneNumber": "56789",
        "price": 100,
        "address": "test test",
        "floor": 8,
        "info": "test info\n",
        "propertyOwnerName": "owner",
        "addedOn": "2019-05-01T07:40:55.711Z",
        "addedFrom": null,
        "nextCall": "2019-05-01T07:40:55.711Z",
        "lastCall": "2019-05-01T07:40:55.711Z", "__v": 0
    }

]

export const  emptyOptions = {
    constructionTypes: [],
    neighborhoods: [],
    propertyTypes: [],
    states: []
}

export const options = {
    "constructionTypes":
        [
            { "_id": "5b8938ee4ddb4d0cec841765", "value": "НОВО", "__v": 0 },
            { "_id": "5b8938f54ddb4d0cec841766", "value": "СТАРО", "__v": 0 },
            { "_id": "5b8938fa4ddb4d0cec841767", "value": "ПАНЕЛ", "__v": 0 },
            { "_id": "5b8938fe4ddb4d0cec841768", "value": "ЕПК", "__v": 0 },
            { "_id": "5b8939094ddb4d0cec841769", "value": "ТУХЛА", "__v": 0 },
            { "_id": "5bab632fd29aaf428ce3d549", "value": "TEST", "__v": 0 },
            { "_id": "5c096d11f0b6b4071c4dfd4e", "value": "dasda", "__v": 0 }
        ],
    "propertyTypes":
        [
            { "_id": "5b1a81797561bd1310b9b243", "value": "ЕДНОСТАЕН", "__v": 0 },
            { "_id": "5b1a81947561bd1310b9b247", "value": "ДВУСТАЕН", "__v": 0 },
            { "_id": "5b73dbbc629e121768144d6b", "value": "ЧЕТЕРИСТАЕН", "__v": 0 },
            { "_id": "5b73e2c8ead7291d20256485", "value": "МЕЗОНЕТ", "__v": 0 },
            { "_id": "5bab632fd29aaf428ce3d54a", "value": "TEST", "__v": 0 },
            { "_id": "5c096d11f0b6b4071c4dfd4f", "value": "sdasd", "__v": 0 }
        ],
    "states":
        [
            { "_id": "5b1a81797561bd1310b9b244", "value": "НАЕТ", "__v": 0 },
            { "_id": "5b1a81c87561bd1310b9b24a", "value": "СВОБОДЕН", "__v": 0 },
            { "_id": "5bab632fd29aaf428ce3d54b", "value": "TEST", "__v": 0 },
            { "_id": "5c096d11f0b6b4071c4dfd50", "value": "dasdas", "__v": 0 }
        ],
    "neighborhoods":
        [
            { "_id": "5b1a81797561bd1310b9b245", "value": "ЦЕНТЪР", "__v": 0 },
            { "_id": "5b1a81947561bd1310b9b249", "value": "ЛОЗЕНЕЦ", "__v": 0 },
            { "_id": "5b73dbbc629e121768144d6c", "value": "ИВАН ВАЗООВ", "__v": 0 },
            { "_id": "5b73e2c8ead7291d20256486", "value": "Стрелбище", "__v": 0 },
            { "_id": "5bab632fd29aaf428ce3d54c", "value": "TEST", "__v": 0 },
            { "_id": "5c096d11f0b6b4071c4dfd51", "value": "dasdas", "__v": 0 }
        ]

}

export const offerPropsPartTwoValues = {
    number: 1, 
    address: 'test address', 
    info: 'test info', 
    propertyOwnerName: 'Ivan',
    phoneNumber: '088934567', 
    phoneNumber2: '088934568', 
    phoneNumber3: '088934569', 
    lastCall: moment(0), 
    nextCall: moment(0)
}

export const offerBlockData = { 
    address: offers[0].address, 
    price: offers[0].price, 
    area: offers[0].area, 
    floor: offers[0].floor, 
    neighborhood: offers[0].neighborhoodId.value, 
    estateType: offers[0].propertyTypeId.value, 
    _id: offers[0]._id 
}