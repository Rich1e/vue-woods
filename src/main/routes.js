import Demos from '../example/index.vue';
import Cell from '../example/cell.vue';
import Button from '../example/button.vue';
import Action from '../example/action.vue';
import Dialog from '../example/dialog.vue';
import Header from '../example/header.vue';
import Picker from '../example/picker.vue';
import Navbar from '../example/navbar.vue';
import Calendar from '../example/calendar.vue';
import Tabbar from '../example/tabbar.vue';
import Toast from '../example/toast.vue';
import TabContainer from '../example/tab-container.vue';
import Indicator from '../example/indicator.vue';
import IndexList from '../example/index-list.vue';
import Progress from '../example/progress.vue';
import Swipe from '../example/swipe.vue';
import PaletteButton from '../example/palette-button.vue';
import Range from '../example/range.vue';
import Switch from '../example/switch.vue';
import Checklist from '../example/checklist.vue';
import Radio from '../example/radio.vue';
import Field from '../example/field.vue';
import Badge from '../example/badge.vue';
import Scroll from '../example/scroll.vue';
import Popup from '../example/popup.vue';
import Spinner from '../example/spinner.vue';
import CellSwipe from '../example/cell-swipe.vue';
import Search from '../example/search.vue';
import LazyLoad from '../example/lazyload.vue';

const routes = [{
    path: '/',
    name: 'demos',
    component: Demos
}, {
    path: '/action',
    name: 'action',
    component: Action
}, {
    path: '/cell',
    name: 'cell',
    component: Cell
}, {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
}, {
    path: '/button',
    name: 'button',
    component: Button
}, {
    path: '/ui-header',
    name: 'header',
    component: Header
}, {
    path: '/picker',
    name: 'picker',
    component: Picker
}, {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
}, {
    path: '/tabbar',
    name: 'tabbar',
    component: Tabbar
}, {
    path: '/tabcontainer',
    name: 'tabcontainer',
    component: TabContainer
}, {
    path: '/toast',
    name: 'toast',
    component: Toast
}, {
    path: '/indicator',
    name: 'indicator',
    component: Indicator
}, {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
}, {
    path: '/indexlist',
    name: 'indexlist',
    component: IndexList
}, {
    path: '/progress',
    name: 'progress',
    component: Progress
}, {
    path: '/swipe',
    name: 'swipe',
    component: Swipe
}, {
    path: '/range',
    name: 'range',
    component: Range
}, {
    path: '/palettebutton',
    name: 'palettebutton',
    component: PaletteButton
}, {
    path: '/switch',
    name: 'switch',
    component: Switch
}, {
    path: '/checklist',
    name: 'checklist',
    component: Checklist
}, {
    path: '/radio',
    name: 'radio',
    component: Radio
}, {
    path: '/field',
    name: 'field',
    component: Field
}, {
    path: '/badge',
    name: 'badge',
    component: Badge
}, {
    path: '/scroll',
    name: 'scroll',
    component: Scroll
}, {
    path: '/popup',
    name: 'popup',
    component: Popup
}, {
    path: '/spinner',
    name: 'spinner',
    component: Spinner
}, {
    path: '/cellswipe',
    name: 'cellswipe',
    component: CellSwipe
}, {
    path: '/search',
    name: 'search',
    component: Search
}, {
    path: '/lazyload',
    name: 'lazyload',
    component: LazyLoad
}];

export default routes;
