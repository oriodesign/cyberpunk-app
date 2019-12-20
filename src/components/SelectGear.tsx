import React, { FC, useState } from 'react';
import './SelectGear.css';
import { Character, CharacterInventory } from '../model/character';
import { GearType, shopInventory, Weapon, Item, Armor, allItemsById } from '../model/gear';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (route: string) => void;
}

const reliabilityMap = {
    vr: "★★★",
    st: "★★",
    ur: "★",
    [""]: ""
}

export const SelectGear: FC<Props> = ({ character, setCharacter, setRoute }) => {

    const [gearType, setGearType] = useState<GearType>("pistol");
    const [cart, setCart] = useState<CharacterInventory>(character.inventory || {});
    const [focusedItem, setFocusedItem] = useState<Item>();

    const items = shopInventory[gearType];
    function className(type: GearType): string {
        return type === gearType ? "gear-type-button selected" : "gear-type-button"
    };

    function buy(item: Item) {
        const currQuantity = cart[item.id] || 0;
        setCart({
            ...cart,
            [item.id]: currQuantity + 1
        });
    }

    function removeFromCart(id: string) {
        const currQuantity = cart[id] || 1;
        setCart({
            ...cart,
            [id]: currQuantity - 1
        });
    }

    const cartTotal = Object.keys(cart).reduce((acc, curr) => {
        const item = allItemsById[curr];
        return acc + item.cost * cart[curr];
    }, 0);

    function onConfirm() {
        setCharacter({
            ...character,
            cash: character.cash!! - cartTotal
        });
        setRoute("menu");
    }

    return <div className="select-gear page">

        <h1 className="page-title">Gear</h1>

        <div className="row">
            <div className="left-col">

                <div className="gear-type-selector">
                    <div className="macro-gear-type">
                        <h1>Weapons and Armors</h1>
                        <div className={className("pistol")} onClick={() => setGearType("pistol")}>Pistols</div>
                        <div className={className("submachinegun")} onClick={() => setGearType("submachinegun")}>Submachineguns</div>
                        <div className={className("rifle")} onClick={() => setGearType("rifle")}>Rifles</div>
                        <div className={className("shotgun")} onClick={() => setGearType("shotgun")}>Shotguns</div>
                        <div className={className("heavyWeapon")} onClick={() => setGearType("heavyWeapon")}>Heavy Weapons</div>
                        <div className={className("exotic")} onClick={() => setGearType("exotic")}>Exotic Weapons</div>
                        <div className={className("melee")} onClick={() => setGearType("melee")}>Melee Weapons</div>
                        <div className={className("ammo")} onClick={() => setGearType("ammo")}>Ammo</div>
                        <div className={className("armor")} onClick={() => setGearType("armor")}>Armor</div>
                    </div>

                    <div className="macro-gear-type">
                        <h1>Items</h1>
                        <div className={className("fashion")} onClick={() => setGearType("fashion")}>Fashion</div>
                        <div className={className("tool")} onClick={() => setGearType("tool")}>Tools</div>
                        <div className={className("personalElectronic")} onClick={() => setGearType("personalElectronic")}>Personal Electronic</div>
                        <div className={className("dataSystem")} onClick={() => setGearType("dataSystem")}>Data System</div>
                        <div className={className("communication")} onClick={() => setGearType("communication")}>Communication</div>
                        <div className={className("surveillance")} onClick={() => setGearType("surveillance")}>Surveillance</div>
                        <div className={className("entertainment")} onClick={() => setGearType("entertainment")}>Entertainment</div>
                        <div className={className("security")} onClick={() => setGearType("security")}>Security</div>
                        <div className={className("medical")} onClick={() => setGearType("medical")}>Medical</div>
                        <div className={className("furnishing")} onClick={() => setGearType("furnishing")}>Furnishing</div>
                        <div className={className("vehicle")} onClick={() => setGearType("vehicle")}>Vehicles</div>
                        <div className={className("lifestyle")} onClick={() => setGearType("lifestyle")}>Lifestyle</div>
                        <div className={className("grocery")} onClick={() => setGearType("grocery")}>Groceries</div>
                        <div className={className("housing")} onClick={() => setGearType("housing")}>Housing</div>
                    </div>
                </div>

            </div>
            <div className="center-col">

                <table className="buy-item-list">

                    {!!(items[0] as Weapon).damage && <tr>
                        <th></th>
                        <th></th>

                        <th>Accuracy</th>
                        <th>Damage</th>
                        <th>Ammo</th>
                        <th>Shots</th>
                        <th>Rate of Fire</th>
                        <th>Range</th>
                        <th>Reliability</th>
                    </tr>}

                    {!!(items[0] as Armor).covers && <tr>
                        <th></th>

                        <th>Stopping power</th>
                        <th>Encumbrance</th>
                        <th>Covers</th>
                    </tr>}

                    {items.map((i, index) => {

                        if ((i as Weapon).damage) {
                            const category = index === 0 || ((items[index - 1] as Weapon).category !== (i as Weapon).category) ? (i as Weapon).category : "";

                            return <tr className="buy-item buy-weapon" key={i.id}>
                                <td className="buy-item-category">{category}</td>
                                <td onClick={() => setFocusedItem(i)} className="buy-item-name">{i.name}</td>
                                <td className="buy-item-accuracy">{(i as Weapon).accuracy}</td>
                                <td className="buy-item-damage">{(i as Weapon).damage}</td>
                                <td className="buy-item-ammo">{(i as Weapon).ammo}</td>

                                <td className="buy-item-shots">{(i as Weapon).shots}</td>
                                <td className="buy-item-rof">{(i as Weapon).rateOfFire}</td>
                                <td className="buy-item-range">{(i as Weapon).range}</td>
                                <td className="buy-item-reliability">{reliabilityMap[(i as Weapon).reliability]}</td>

                                <td className="buy-item-button" onClick={() => buy(i)}>Buy {i.cost}$</td>
                            </tr>
                        }

                        if ((i as Armor).covers) {
                            return <tr className="buy-item" key={i.id}>
                                <td onClick={() => setFocusedItem(i)} className="buy-item-name">{i.name}</td>
                                <td className="buy-item-stopping-power">{(i as Armor).stoppingPower}</td>
                                <td className="buy-item-encumbrance">{(i as Armor).encumbrance}</td>
                                <td className="buy-item-covers">{(i as Armor).covers.join(", ")}</td>
                                <td className="buy-item-button" onClick={() => buy(i)}>Buy {i.cost}$</td>
                            </tr>
                        }

                        return <tr className="buy-item" key={i.id}>
                            <td onClick={() => setFocusedItem(i)} className="buy-item-name">{i.name}</td>
                            <td className="buy-item-button" onClick={() => buy(i)}>Buy {i.cost}$</td>
                        </tr>
                    })}
                </table>
            </div>

            <div className="right-col">

                <div className="cash-display">{character.cash!! - cartTotal}$</div>

                {Object.keys(cart).length > 0 && <div className="cart">
                    <h1>Cart</h1>
                    {Object.keys(cart).map(id => {
                        const item = allItemsById[id];

                        return <div className="cart-item">
                            <div className="cart-item-name">{item.name} (x{cart[id]})</div>
                            <div onClick={() => removeFromCart(id)} className="cart-item-remove">✖</div>
                        </div>
                    })}

                    <div className="cart-total">TOT -{cartTotal}$</div>

                    {<button className="neon-button" onClick={() => onConfirm()}>Confirm</button>}
                </div>}

            </div>
        </div>


        {focusedItem && <div className="sidepanel">
            <h1>{focusedItem.name}</h1>

            <p>{focusedItem.description}</p>

            <button className="neon-button" onClick={() => setFocusedItem(undefined)}>Close</button>
        </div>}



        <div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Cancel</button>

        </div>

    </div>
};