type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

type Assignment = {
    x: Pick<AllType, 'name' | 'position' | 'color' | 'weight'>;
};

function compare(top: AllType, bottom: AllType): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight
    };
}

