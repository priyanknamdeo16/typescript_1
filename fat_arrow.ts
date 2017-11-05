function a() {
    return () => {
        alert(this.name); //priyank, this is from lexicacl scope
    }
}

a.call({name: 'priyank'})();