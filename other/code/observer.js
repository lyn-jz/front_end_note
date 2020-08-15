
function ObserverList() {
  this.observerList = [];
}
ObserverList.prototype.Add = function(obj) {
  return this.observerList.push(obj);
}
ObserverList.prototype.IndexOf = function(obj, startIndex) {
  var i = startIndex, pointer = -1;
  while(i < this.observerList.length) {
    if(this.observerList[i] === obj) {
      pointer = i;
    }
    i++;
  }
}
ObserverList.prototype.RemoveIndexAt = function(index) {
  if(index === 0) { this.observerList.shift(); }
  else if(index === this.observerList.length - 1) {
    this.observerList.pop();
  }
}
ObserverList.prototype.Count = function() {
  return this.observerList.length;
}
ObserverList.prototype.Get = function(index) {
  if(index > -1 && index < this.observerList.length) {
    this.observerList[index];
  }
}
// 目标
function Subject() {
  this.observers = new ObserverList();
}
Subject.prototype.AddObserver = function(observer) {
  this.observers.push(observer);
}
Subject.prototype.RemoveObserver = function(observer) {
  this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0));
}
Subject.prototype.Notify = function(context) {
  var observerCount = this.observers.Count();
  for(var i = 0; i < observerCount; i++) {
    this.observers.Get(i).Update(context);
  }
}
function Observer() {
  this.Update = function() {
    console.log(update);
  }
}
// 使用extend将具体目标、具体观察者扩展到某个对象
function extend(obj, extension) {
  for(var key in obj) {
    extension[key] = obj[key];
  }
}

