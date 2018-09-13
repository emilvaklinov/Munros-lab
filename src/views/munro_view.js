const PubSub = require('../helpers/pub_sub.js');


const MunroView = function(container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};


MunroView.prototype.render = function(){
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro-view');

  const name = this.createMunroHeader();
  munroContainer.appendChild(name);
  this.munrosContainer.appendChild(munroContainer);

}


MunroView.prototype.createMunroHeader = function(){
  const name = document.createElement('h2');
  name.classList.add('name');
  name.textContent = this.munro.name;
  return name;




}


module.exports = MunroView;
