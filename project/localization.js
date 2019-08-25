import LocalizedStrings from 'react-localization';
import strings from '../common/strings';

const Strings = global.Strings = new LocalizedStrings(strings);
export default Strings;
