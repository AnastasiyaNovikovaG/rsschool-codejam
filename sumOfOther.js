function sumOfOther(mas) {
    let mass = [];
    let sum = 0;
    for (let i = 0; i < mas.length; i++) {
        for (let j = 0; j < mas.length; j++) {
            if (i != j) sum += mas[j];
        }
        mass[i] = sum;
        sum = 0;
    }
    return mass;
}