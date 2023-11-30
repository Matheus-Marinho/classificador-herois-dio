const heroes = [
    { heroName: "Capitão Cavaco", exp: 3059 },
    { heroName: "Thor", exp: 12730 },
    { heroName: "Homem-Ferradura", exp: 817 },
    { heroName: "Capitão Caverna", exp: 6522 },
    { heroName: "Dr. Estranho", exp: 9529 },
    { heroName: "Homem Touperia", exp: 2237 },
    { heroName: "He-Man", exp: 7965 },
    { heroName: "Tocha Humana", exp: 4009 },
    { heroName: "Cavaleiro da Lua", exp: 3675 },
    { heroName: "Pantera Negra", exp: 8201 }
];

heroes.forEach(hero => {
    let heroLevel = getHeroLevel(hero);

    console.log(`O Herói de nome ${hero.heroName} está no nível de ${heroLevel}!`);
});

function getHeroLevel(hero) {
    if (hero.exp <= 1000) {
        return 'Ferro'
    } else if (hero.exp > 1000 && hero.exp <= 2000) {
        return 'Bronze'
    } else if (hero.exp > 2000 && hero.exp <= 5000) {
        return 'Prata'
    } else if (hero.exp > 6000 && hero.exp <= 7000) {
        return 'Ouro'
    } else if (hero.exp > 7000 && hero.exp <= 8000) {
        return 'Platina'
    } else if (hero.exp > 8000 && hero.exp <= 9000) {
        return 'Ascendente'
    } else if (hero.exp > 9000 && hero.exp <= 10000) {
        return 'Imortal'
    } else if (hero.exp > 10000) {
        return 'Radiante'
    } else {
        return 'não classificado'
    }
};

