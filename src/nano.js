import {createElement} from 'react';
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonCache} from 'nano-css/addon/cache';
import {addon as addonJsx} from 'nano-css/addon/jsx';
import {addon as addonAtoms} from 'nano-css/addon/atoms';

const nano = create({
    h: createElement
});

addonRule(nano);
addonJsx(nano);
addonAtoms(nano);

const {rule, jsx} = nano;

export {
    nano,
    rule,
    jsx,
};
