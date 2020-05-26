class Vector {
    private els: number[];

    public static Create(els: number[]): Vector {
        return new Vector().setElements(els);
    }

    public static Zero(n: number): Vector {
        n = n >= 0 ? n : 0;
        const els: number[] = [];
        els.length = n;
        return new Vector().setElements(els);
    }

    public setElements(els: number[]): this {
        this.els = (els || []).slice();
        return this;
    }

    public dimension(): number {
        return this.els.length;
    }

    public dup(): Vector {
        return Vector.Create(this.els);
    }

    public e(i: number): number | undefined {
        if (i >= 0 && i < this.els.length) return this.els[i];
        return undefined;
    }

    public map(fn: (x: number, i: number) => number) {
        const els: number[] = [];
        this.each((x, i) => els.push(fn(x, i)));
        return Vector.Create(els);
    }

    public each(fn: (x: number, i: number) => void) {
        for (let i = 0; i < this.els.length; ++i) {
            fn(this.els[i], i);
        }
    }

    public add(rhs: Vector): Vector {
        return this.map((x, i) => x + rhs.els[i]);
    }

    public subtract(rhs: Vector): Vector {
        return this.map((x, i) => x - rhs.els[i]);
    }

    public multiply(rhs: Vector): Vector {
        return this.map((x, i) => x * rhs.els[i]);
    }

    public dot3(rhs: Vector): number {
        if (this.els.length < 3 || rhs.els.length < 3) return undefined;
        let product = 0;
        for (let i = 0; i < 3; ++i) {
            product += this.els[i] * rhs.els[i];
        }
        return product;
    }

    public cross3(rhs: Vector): Vector {
        if (this.els.length < 3 || rhs.els.length < 3) return undefined;
        return Vector.Create([
            this.e(1) * rhs.e(2) - this.e(2) * rhs.e(1),
            this.e(2) * rhs.e(0) - this.e(0) * rhs.e(2),
            this.e(0) * rhs.e(1) - this.e(1) * rhs.e(0),
        ]);
    }
}