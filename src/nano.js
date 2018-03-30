import {createElement} from 'react';
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonSheet} from 'nano-css/addon/sheet';
import {addon as addonCache} from 'nano-css/addon/cache';
import {addon as addonJsx} from 'nano-css/addon/jsx';
import {addon as addonAtoms} from 'nano-css/addon/atoms';
import {addon as addonNesting} from 'nano-css/addon/nesting';
import {addon as addonKeyframes} from 'nano-css/addon/keyframes';
import {addon as addonAnimateFadeIn} from 'nano-css/addon/animate/fadeIn';

const nano = create({
    h: createElement
});

addonRule(nano);
addonSheet(nano);
addonJsx(nano);
addonAtoms(nano);
addonNesting(nano);
addonKeyframes(nano);
addonAnimateFadeIn(nano);

const {rule, sheet, jsx} = nano;

export {
    nano,
    rule,
    sheet,
    jsx,
};
