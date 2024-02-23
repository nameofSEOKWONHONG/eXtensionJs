// check empty
const xIsEmpty = function (v) {
    return (v === null ||
        v === '' ||
        v === undefined ||
        (v instanceof Set && v.size === 0 ||
            v instanceof Array && v.length === 0)
    );
}

// 중복체크
Array.prototype.xHasDuplicates = function() {
    // Set을 이용하여 중복을 체크
    const set = new Set(this);
    return set.size !== this.length;
};

// 중복제거
Array.prototype.xRemoveDuplicates = function() {
    // Set을 사용하여 중복 제거 후 배열로 변환
    return [...new Set(this)];
};

// element의 중복제거
Array.prototype.xRemoveDuplicates = function (key) {
    const unique = new Set();
    return this.filter(obj => {
        const value = obj[key];
        if (!unique.has(value)) {
            unique.add(value);
            return true;
        }
        return false;
    });
};

// check array empty
Array.prototype.xIsEmpty = function () {
    return xIsEmpty(this);
}

// check number empty
Number.prototype.xIsEmpty = function () {
    return xIsEmpty(this);
}

// check string empty
String.prototype.xIsEmpty = function () {
    return xIsEmpty(this.toString());
}

String.prototype.xToDateFormat = function () {    
    let v = this.toString();
    if (xIsEmpty(v)) return v;
    let y = v.substring(0, 4);
    let m = v.substring(4, 6);
    let d = v.substring(6, 8);
    return `${y}${m}${d}`;
}

String.prototype.xToDate = function () {
    let v = this.toString();
    if (xIsEmpty(v)) return v;
    let y = v.substring(0, 4);
    let m = v.substring(4, 6) - 1;
    let d = v.substring(6, 8);
    return new Date(y, m, d);
}

String.prototype.xToYear = function () {
    let v = this.toString();
    if (xIsEmpty(v)) return v;
    return v.substring(0, 4);
}

String.prototype.xToMonth = function () {
    let v = this.toString();
    if (xIsEmpty(v)) return v;
    return v.substring(4, 6);
}

String.prototype.xToDay = function () {
    let v = this.toString();
    if (xIsEmpty(v)) return v;
    return v.substring(6, 8);
}