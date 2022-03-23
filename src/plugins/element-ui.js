import Vue from 'vue'
import {
    Loading,
    MessageBox,
    Notification,
    Message,
    Container,
    Card,
    Row,
    Col,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    OptionGroup,
    Autocomplete,
    Checkbox,
    Popover,
    Divider,
    Dialog,
    Link,
    Radio,
    Button,

} from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN'
// import '@/assets/css/element-ui.scss'
// import '@/assets/css/element-element-variables.scss'

Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Container);
Vue.use(Checkbox);
Vue.use(Popover);
Vue.use(Divider);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Autocomplete);
Vue.use(Dialog);
Vue.use(Link);
Vue.use(Radio);
Vue.use(Button);
//Vue.use(Element, {
//    locale,
//    size: 'small'
//})

Vue.use(Loading.directive);

Vue.prototype.$ELEMENT = { locale, size: 'small' };
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
