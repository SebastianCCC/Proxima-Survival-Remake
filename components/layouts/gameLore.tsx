import { useTranslation } from "react-i18next"
import "@/styles/common.block/lore.css"

const GameLore = () => {
    const { t } = useTranslation()
    return <section>
        <div>
            <h1 className="loreTitle" id="titleDefault">{t('lore.title')}</h1>
        </div>
        <div className="build" id="boxDefault">
            <ul className="buildMenu" id="menuDefault">
                <li className="buildTitle" id="titleDefault">{t('lore.build.title')}</li>
                <li className="buildContent" id="contentDefault">{t('lore.build.content')}</li>
            </ul>
            <img className = "buildImage" id="imageDefault" src="assets/Images/Scrap.png"/>
        </div>
        <div className="explore" id="boxDefault">
            <ul className="exploreMenu" id="menuDefault">
                <li className="exploreTitle" id="titleDefault">{t('lore.explore.title')}</li>
                <li className="exploreContent" id="contentDefault">{t('lore.build.content')}</li>
            </ul>
            <img className = "exploreImage" id="imageDefault" src="assets/Images/Vegetation.png"/>
        </div>
        <div className="xCorp" id="boxDefault">
            <ul className="xCorpMenu" id="menuDefault">
                <li className="xCorpTitle" id="titleDefault">{t('lore.xcorp.title')}</li>
                <li className="xCorpContent" id="contentDefault">{t('lore.xcorp.content')}</li>
            </ul>
            <img className = "xCorpImage" id="imageDefault" src="assets/images/ProximaBackground.png"/>
        </div>
    </section>
}

export { GameLore }

