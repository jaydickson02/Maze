class DNA {
  constructor(target) {
    //Initialise the gene array
    this.target = target;
    this.possibleGenes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,-' 123456789";
    this.genes = this.generateGenes();
  }

  generateGenes() {

    var genesNew = [];
    //Fill the genes array with random genes from the possibleGenes Array
    for (var i = 0; i < this.target.length; i++) {

      //Generate a random number
      var RandomNumber = Math.floor(Math.random() * this.possibleGenes.length);

      //Fill the array
      genesNew[i] = this.possibleGenes[RandomNumber];
    }
    return genesNew;
  }

  fitness() {
    var score = 0;
    for (var i = 0; i < this.genes.length; i++) {
      if (this.target[i] == this.genes[i]) {
        score++;
      }
    }
    var scoreSqr = score * score;

    return scoreSqr;
  }

  crossover(parent) {
    var child = new DNA(this.target);

    var childGenes = [];
    var midpoint = Math.floor(Math.random() * this.genes.length);

    for (var i = 0; i < this.genes.length; i++) {
      if (i < midpoint) {
        childGenes[i] = this.genes[i];
      } else {
        childGenes[i] = parent.genes[i];
      }
    }

    child.genes = childGenes;

    return child;
  }

  mutate(rate) {
    for (var i = 0; i < this.genes.length; i++) {
      //Random chance
      var percent = Math.random();
      //Code runs at the mutation rate
      if (percent < rate) {

        //Choose a random new gene
        var randomIndex = Math.floor(Math.random() * this.possibleGenes.length);
        this.genes[i] = this.possibleGenes[randomIndex];
      }
    }
  }

  convertToString() {
    var string = '';

    for (var i = 0; i < this.genes.length; i++) {
      string += this.genes[i];
    }

    return string;
  }

}