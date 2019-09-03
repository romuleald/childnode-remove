((arr) => {
    arr.forEach(item => {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: () => {
                if (this.parentNode !== null) {
                    this.parentNode.removeChild(this);
                }
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
