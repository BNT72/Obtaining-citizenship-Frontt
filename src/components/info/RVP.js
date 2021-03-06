import React, {Component} from "react";
import {Tab, ListGroup, Row, Col} from "react-bootstrap";

export default class RVP extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Что такое разрешение на временное проживание?
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">Кто может подать документы на получение разрешения на
                                временное проживание?</ListGroup.Item>
                            <ListGroup.Item action href="#link3">Какие документы понадобятся для оформления РВП по квоте
                                взрослому иностранцу?</ListGroup.Item>
                            <ListGroup.Item action href="#link4">Как проверить готовность РВП?</ListGroup.Item>
                            <ListGroup.Item action href="#link5">Что необходимо сделать после получения
                                РВП?</ListGroup.Item>
                            <ListGroup.Item action href="#link6">Как зарегистрироваться по месту жительства после
                                получения РВП?</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <div className="card">
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    Разрешение на временное проживание (РВП) — это документ, позволяющий иностранцу
                                    проживать и работать в России в течение трех лет. Проживание на основании РВП — это,
                                    за редким исключением, первый этап получения российского гражданства.
                                    <br/>
                                    <br/>

                                    Прожив в стране как минимум один год на основании разрешения на временное
                                    проживание, вы можете получить вид на жительство, а уже затем — российское
                                    гражданство.
                                    <br/>
                                    <br/>


                                    После получения РВП вы можете:
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" variant="dark"> работать в России без получения
                                            миграционных патентов и разрешений</ListGroup.Item>
                                        <ListGroup.Item as="li">оформить регистрацию по месту жительства на срок
                                            действия РВП</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark"> зарегистрироваться как индивидуальный
                                            предприниматель и официально заниматься бизнесом</ListGroup.Item>
                                        <ListGroup.Item as="li">получить визу временно проживающего лица, позволяющую
                                            находиться в России на протяжении трех лет безвыездно (для граждан стран,
                                            имеющих визовый режим с Россией)</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark"> не позднее чем за 4 месяца до окончания
                                            срока действия РВП подать документы на получение вида на жительство в
                                            России.</ListGroup.Item>
                                    </ListGroup>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link2">
                                    Правительство России ежегодно определяет квоту на выдачу РВП исходя из заявок
                                    регионов, однако она ежегодно снижается. В 2022 году в России будет выдано 18 955
                                    разрешений на временное проживание, из них в Москве — всего 1 500.
                                    <br/> <br/>
                                    В рамках этой квоты разрешение на временное проживание может получить практически
                                    любой иностранец, владеющий русским языком, прошедший медицинское
                                    освидетельствование. Но как только квота будет исчерпана, до следующего года
                                    заявления на получение РВП по квоте приниматься не будут.
                                    <br/>

                                    Но некоторые иностранные граждане и лица без гражданства могут получить РВП без
                                    учета квоты.
                                    <br/>
                                    Вы можете претендовать на получение РВП без учета квоты, если вы:

                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" variant="dark">состоите в браке с гражданином
                                            РФ</ListGroup.Item>
                                        <ListGroup.Item as="li">являетесь инвестором, чья доля в уставном капитале
                                            российского компании составляет не менее 10% непрерывно в течение 3 лет, при
                                            этом уставный капитал компании должен составлять не менее 100 миллионов
                                            рублей, а размер ежегодных налогов и сборов в течение 3 лет — не менее 6
                                            миллионов рублей</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark"> участник госпрограммы по оказанию
                                            содействия добровольному переселению в РФ соотечественников, проживающих за
                                            рубежом</ListGroup.Item>
                                        <ListGroup.Item as="li">поступили на военную службу в Российской
                                            армии</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark"> гражданин государства, входившего в
                                            состав СССР и получили высшее образование в образовательной организации на
                                            территории Российской Федерации, по имеющим государственную аккредитацию
                                            образовательным программам</ListGroup.Item>
                                        <ListGroup.Item as="li"> гражданин Республики Казахстан, Республики Молдова или
                                            Украин</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">переселяетесь в Российскую Федерацию на
                                            постоянное место жительства в соответствии с международными договорами
                                            Российской Федерации о регулировании процесса переселения и защите прав
                                            переселенцев</ListGroup.Item>
                                        <ListGroup.Item as="li">лицо без гражданства, имеете временное удостоверение
                                            личности лица без гражданства в Российской Федерации либо лицо без
                                            гражданства, постоянно проживали на территории Украины и были признаны
                                            беженцем или получили временное убежище на территории Российской
                                            Федерации</ListGroup.Item>

                                    </ListGroup>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">
                                    Для оформления РВП по квоте взрослому дееспособному иностранцу или лицу без
                                    гражданства понадобятся следующие документы:
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" variant="dark">заявление в двух
                                            экземплярах</ListGroup.Item>
                                        <ListGroup.Item as="li">фотографии</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">документ, удостоверяющий
                                            личность</ListGroup.Item>
                                        <ListGroup.Item as="li">документ, выданный полномочным органом государства
                                            постоянного проживания, о наличии (отсутствии) судимости у заявителя, — для
                                            тех, кто въехал в РФ по визе</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">вид на жительство или иной документ,
                                            выданный полномочным органом иностранного государства, который подтверждает
                                            проживание иностранного гражданина вне государства его гражданской
                                            принадлежности (для тех, кто въехал в РФ по визе)</ListGroup.Item>
                                        <ListGroup.Item as="li">медицинские документы</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">документ, подтверждающий владение русским
                                            языком, знание истории России и основ законодательства Российской Федерации.
                                            Он не предоставляется мужчинами, достигшими возраста шестидесяти пяти лет, и
                                            женщинами, достигшими возраста шестидесяти лет, а также участниками
                                            госпрограммы по оказанию содействия добровольному переселению в РФ и членами
                                            семьи.</ListGroup.Item>
                                    </ListGroup>

                                    Кроме того, необходимо уплатить пошлину за выдачу РВП в размере 1600 рублей.
                                    Квитанцию об уплате пошлины представлять необязательно, но вы можете показать ее по
                                    собственной инициативе.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">Чтобы проверить готовность разрешения на временное
                                    проживание, воспользуйтесь сервисом ГУВМ МВД России. Для этого укажите регион, в
                                    котором вы подали документы на оформление РВП, дату рождения и номер документа,
                                    который был предоставлен в ГУВМ МВД России для оформления разрешения на временное
                                    проживание.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link5">После получения РВП вам необходимо в течение 7 рабочих дней
                                    подать заявление о регистрации в структурное подразделение ГУВМ МВД России по месту
                                    нахождения жилого помещения, указанного при обращении с заявлением о выдаче
                                    разрешения.
                                    <br/>
                                    Если у вас нет возможности зарегистрироваться по месту жительства, вам необходимо
                                    встать на миграционный учет.</Tab.Pane>
                                <Tab.Pane eventKey="#link6">Для регистрации по месту жительства вам понадобятся:
                                    <br/>
                                    заявление (бланк можно взять в месте оформления регистрации)
                                    <br/>
                                    разрешение на временное пребывание
                                    <br/>
                                    документ, подтверждающий право пользования жилым помещением.


                                    Для регистрации по месту жительства на срок действия РВП можно обратиться в
                                    территориальный орган ГУВМ МВД или центры госуслуг «Мои документы».</Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}
