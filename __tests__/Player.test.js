const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
console.log(new Potion());
const Player = require('../lib/Player');
const { TestScheduler } = require('jest');
const { exportAllDeclaration } = require('@babel/types');
const { JestEnvironment } = require('@jest/environment');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});