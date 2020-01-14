/**
 * Import original module declarations
 */
import 'styled-components'

/**
 * Extend them
 */
declare module 'styled-components' {
    export interface Theme {
        colors: {
            primary: string
            secondary: string
        }
    }
}
