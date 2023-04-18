import { getDate } from './../../src/helpers/getData';

describe('Helper getData', () => {
    test('Should be get data', async () => {
        const dataUserProjects = await getDate();

        expect(dataUserProjects.length).toBeGreaterThan(0);
        expect(dataUserProjects[0]).toEqual({
            id : expect.any(Number),
            name : expect.any(String),
            project: expect.any(Array)
        });
    })
})