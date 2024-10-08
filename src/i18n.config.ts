import { createI18n } from 'vue-i18n'
import en from './locales/en'
import th from './locales/th'

export function createAppI18n() {
    // load locale from local storage
    const localState = localStorage.getItem('locale') || 'en'
    document.documentElement.lang = localState

    return createI18n<[typeof en], 'en' | 'th'>({
        locale: localState,
        availableLocales: ['en', 'th'],
        fallbackLocale: 'en',
        messages: {
            en,
            th
        }
    })
}
