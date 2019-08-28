export default {
    get: jest.fn(() => Promise.resolve({ data: {offers: ['asd','sad01']} })),
    post: jest.fn(() => Promise.resolve({ data: {} }))
};