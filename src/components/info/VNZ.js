import React, {Component} from "react";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";

export default class VNZ extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">Что такое вид на жительство в России?</ListGroup.Item>
                            <ListGroup.Item action href="#link2">Кто может получить вид на жительство в
                                России?</ListGroup.Item>
                            <ListGroup.Item action href="#link3">Какие документы понадобятся для оформления вида на
                                жительство иностранцам, имеющим РВП?</ListGroup.Item>
                            <ListGroup.Item action href="#link4">Сколько времени занимает оформление вида на жительство
                                и на какой срок он выдается?</ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <div className="card">
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    Вид на жительство (ВНЖ) — документ, выданный иностранному гражданину в подтверждение
                                    его права на постоянное проживание в Российской Федерации, а также его права на
                                    свободный выезд из Российской Федерации и въезд в Российскую Федерацию. Вид на
                                    жительство, выданный лицу без гражданства, является одновременно и документом,
                                    удостоверяющим его личность.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    Подать документы на получение вида на жительство в России могут иностранцы, имеющие
                                    разрешение на временное проживание в России.
                                    <br/>
                                    <br/>


                                    Подать документы на получение вида на жительство в России без оформления разрешения
                                    на временное проживание могут:
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" variant="dark"> иностранцы, родившиеся на территории
                                            РСФСР и состоявшие в прошлом в гражданстве СССР </ListGroup.Item>
                                        <ListGroup.Item as="li"> иностранцы, признанные носителями русского
                                            языка</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">иностранцы, которые либо сами, либо их
                                            родственники по прямой восходящей линии, усыновители или супруг были
                                            незаконно депортированы с территории Крымской АССР, а также их родственники
                                            по прямой нисходящей линии, усыновленные дети или супруг </ListGroup.Item>
                                        <ListGroup.Item as="li"> иностранные высококвалифицированные специалисты,
                                            работающие в России, и члены их семей</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark"> иностранные квалифицированные
                                            специалисты, проработавшие шесть и более месяцев России по профессии
                                            (специальности, должности) из перечня профессий иностранных
                                            граждан </ListGroup.Item>
                                        <ListGroup.Item as="li"> иностранцы, успешно освоившие в Российской Федерации
                                            имеющую государственную аккредитацию образовательную программу высшего
                                            образования по очной форме обучения и получившие документ об образовании и о
                                            квалификации с отличием</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">граждане, проживающие на территории
                                            России, у которых прекращено гражданство Российской
                                            Федерации </ListGroup.Item>
                                        <ListGroup.Item as="li"> граждане, проживающие на территории России, в отношении
                                            которых отменено решение о приобретении гражданства Российской
                                            Федерации</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">граждане Республики Беларусь старше 18
                                            лет, в том числе на получающих вместе с ними ВНЖ детей и недееспособных, для
                                            которых подающий документы является родителем, усыновителем, опекуном или
                                            попечителем </ListGroup.Item>
                                        <ListGroup.Item as="li">иностранцы, получившие политическое убежище в
                                            России</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">иностранцы и члены их семей, прибывшие в
                                            Россию в экстренном массовом порядке и признанные беженцами на территории
                                            России или получившие временное убежище на территории России и ставшие
                                            участниками госпрограммы по оказанию содействия добровольному переселению в
                                            Россию соотечественников, проживающих за рубежом </ListGroup.Item>


                                    </ListGroup>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">Иностранцы, имеющие разрешение на временное проживание,
                                    подают для получения вида на жительство следующие документы:
                                    <br/>
                                    <br/>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" variant="dark">заявление в двух
                                            экземплярах </ListGroup.Item>
                                        <ListGroup.Item as="li">четыре личные фотографии</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark"> документ, удостоверяющий
                                            личность </ListGroup.Item>
                                        <ListGroup.Item as="li">документ, подтверждающий возможность содержать себя и
                                            членов своей семьи в России в пределах прожиточного минимума, не прибегая к
                                            помощи государства (за исключением иностранных граждан, признанных
                                            нетрудоспособными)</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">документ, подтверждающий наличие у
                                            иностранца жилого помещения, права на которое не зарегистрированы в Едином
                                            государственном реестре недвижимости (предоставляется иностранцем,
                                            обращающимся за ВНЖ по истечении трех лет со дня въезда в
                                            Россию) </ListGroup.Item>
                                        <ListGroup.Item as="li">документы, подтверждающие степень родства — для
                                            иностранцев с ВИЧ-инфекцией, имеющих членов семьи (супруга/супругу), детей
                                            (в том числе усыновленных), родителей (в том числе приемных) — граждан
                                            Российской Федерации либо иностранных граждан, постоянно проживающих на
                                            территории РФ</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">медицинские документы </ListGroup.Item>
                                        <ListGroup.Item as="li">документ, подтверждающий владение русским языком, знание
                                            истории России и основ законодательства Российской Федерации (документ не
                                            предоставляется мужчинами старше шестидесяти пяти лет и женщинами старше
                                            шестидесяти лет)</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">документ, выданный полномочным органом
                                            государства постоянного проживания не ранее чем за 3 месяца на день подачи
                                            заявления, об отсутствии судимости либо, при ее наличии, содержащий
                                            информацию о преступлении, за которое был осужден заявитель. Представляется
                                            иностранным гражданином, достигшим четырнадцатилетнего возраста. возраста
                                            (для тех, кто въехал в РФ по визе) </ListGroup.Item>

                                    </ListGroup>
                                    <br/>
                                    Кроме того, необходимо оплатить государственную пошлину в размере 5 000 рублей.
                                    Документ об оплате госпошлины представлять необязательно, но вы можете сделать это
                                    по собственной инициативе.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">Срок рассмотрения заявления зависит от того, кто подает
                                    документы на получение вида на жительство:
                                    <br/>
                                    <br/>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" variant="dark"> четыре месяца для иностранцев, имеющих
                                            разрешение на временное проживание </ListGroup.Item>
                                        <ListGroup.Item as="li">три месяца для высококвалифицированных специалистов,
                                            граждан
                                            Беларуси, граждан, депортированных с территории Крымской АССР или их
                                            родственников</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark"> два месяца для иностранцев — признанных
                                            носителями русского языка, для иностранцев, в отношении которых отменено
                                            решение
                                            о приобретении гражданства Российской Федерации </ListGroup.Item>
                                        <ListGroup.Item as="li"> пятнадцать дней — для иностранцев, у которых прекращено
                                            гражданство Российской Федерации, и иностранцев, получивших политическое
                                            убежище
                                            в России</ListGroup.Item>
                                    </ListGroup>
                                    <br/>
                                    Вид на жительство выдается бессрочно. Но есть несколько исключений:
                                    <br/>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" variant="dark"> лицу без гражданства вид на жительство
                                            выдается на 10 лет </ListGroup.Item>
                                        <ListGroup.Item as="li">вид на жительство в форме карты с электронным носителем
                                            выдается на 10 лет</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="dark">высококвалифицированному специалисту и
                                            членам его семьи вид на жительство выдается на срок действия разрешения на
                                            работу, выданного высококвалифицированному специалисту </ListGroup.Item>


                                    </ListGroup></Tab.Pane>


                            </Tab.Content>
                        </div>
                    </Col>
                </Row>
                {/*<ListGroup as="ol" numbered>*/}
                {/*    <ListGroup.Item as="li" variant="dark"> </ListGroup.Item>*/}
                {/*    <ListGroup.Item as="li"></ListGroup.Item>*/}

                {/*</ListGroup>*/}
            </Tab.Container>
        );
    }
}
