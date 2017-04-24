import React from 'react'
import styles from './stylesheet/mainpage.css'

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.mainpage} >Mazurek skomentowała sprawę dziś w Sejmie podczas briefingu prasowego. ­ Rafał Piasecki nie jest
                członkiem Prawa i Sprawiedliwości. Zrezygnował z klubu radnych, nie pełni już żadnych funkcji i bardzo bym
                państwa prosiła o to, by jednak jego z nami nie utożsamiać ­ mówiła do dziennikarzy rzeczniczka PiS.
                Dodała też, że adwokat żony byłego bydgoskiego radnego wystąpił już wcześniej z prośbą o interwencję do
                Jarosława Kaczyńskiego, ponieważ ten był partyjnym zwierzchnikiem Piaseckiego. Prezes PiS miał wtedy
                podjąć tę interwencję, uruchamiając partyjne machiny.
                ­ Natychmiast pan prezes skierował pismo do szefa okręgu, w którym jest Tomasz Latos, o wyjaśnienie tej
                kwestii i w wyniku działań, które podjął Tomasz Latos, w wyniku rozmów, pan Piasecki zrezygnował z
                członkostwa klubu radny PiS, a w dalszej kolejności z mandatu radnego. Dzisiaj dla nas jako Prawa i
                Sprawiedliwości ten temat jest zakończony. Oczywiście jest to temat w dalszej kolejności dla prokuratury i dla
                sądów ­ skomentowała Beata Mazurek.
            </div>
        )
    }
}

export default MainPage;