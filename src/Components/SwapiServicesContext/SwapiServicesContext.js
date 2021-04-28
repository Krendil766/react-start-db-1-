import { createContext } from 'react'

const {
    Provider:SwapiServicesProvider,
    Consumer:SwapiServicesConsumer,
} = createContext();

export {
    SwapiServicesProvider,
    SwapiServicesConsumer,
}