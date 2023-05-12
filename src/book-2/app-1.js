console.log("Hello from app-1!");

const counters = {
  isPrime: [],
  factorize: [],
};

function isPrime(v) {
  counters.isPrime.push(v);
  if (v <= 3) {
    return v > 1;
  }
  if (v % 2 == 0 || v % 3 == 0) {
    return false;
  }
  var vSqrt = Math.sqrt(v);
  for (let i = 5; i <= vSqrt; i += 6) {
    if (v % i == 0 || v % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

const isPrimeCached = isPrimeCachedFactory();

function factorize(v) {
  counters.factorize.push(v);
  if (!isPrimeCached(v)) {
    let i = Math.floor(Math.sqrt(v));
    while (v % i != 0) {
      i--;
    }
    return [...factorize(i), ...factorize(v / i)];
  }
  return [v];
}

function isPrimeCachedFactory() {
  const cache = {};
  const cached = function cached(v) {
    if (v in cache) {
      return cache[v];
    }
    const res = isPrime(v);
    cache[v] = res;
    return res;
  };

  return cached;
}

function factorizeCachedFactory() {
  const cache = {};
  const funfac = function fac(v) {
    if (v in cache) {
      return cache[v];
    }
    counters.factorize.push(v);
    if (!isPrimeCached(v)) {
      let i = Math.floor(Math.sqrt(v));
      while (v % i != 0) {
        i--;
      }
      let newVar = [...fac(i), ...fac(v / i)];
      cache[v] = newVar;
      return newVar;
    }
    cache[v] = [v];
    return [v];
  };
  return funfac;
}

const res = factorizeCachedFactory()(100);
console.log(`Result: ${res}`);
console.log(`counters:  ${JSON.stringify(counters)}`);
