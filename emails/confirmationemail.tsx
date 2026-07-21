import {Html, Head, Body, Container, Heading, Text, Img, Hr, Link,} from "@react-email/components"

interface Props {
    name: string;
}

export default function ConfirmationEmail({name}:Props){
    return(
        <Html>
            <Head/>
            <Body 
                style = {{
                        background: "#494646",
                        color: "#E7D2AA",
                        fontFamily: "var(--font-cinzel)",
                        padding: "40px 0",
                        textAlign: "center",
                }}
            >
                <Container 
                        style={{
                            maxWidth: "620px",
                            margin: "0 auto",
                            background: "#141414",
                            border: "1px solid #C69C53",
                            borderRadius: "16px",
                            padding: "40px",
                        }}
                    >
                        <Img 
                            src = "https://aromethos.com/images/logo_att.png"
                            width = "110"
                            style={{margin: "0 auto",

                            }}
                            />
                        <Heading 
                                style={{
                                    color: "#C69C53",
                                    fontSize: "38px",
                                    letterSpacing: "3px"

                        }}>
                            Aromethos
                        </Heading>
                        <Text
                            style={{
                                color: "#E7D2AA",
                                fontStyle: "italic",
                                fontSize: "20px"
                            }}
                        >
                            O sabor da história
                        </Text>
                        <Hr style={{borderColor: "#C69C53", margin: "30px 0",}}/>

                        <Heading
                            style={{
                            color: "#C69C53",
                            fontSize: "30px"
                            }}
                        >
                            Bem-vindo à Aromethos
                        </Heading>
                        <Text style={{fontSize: "20px", fontFamily: "var(--font-cormorant)", marginLeft: "10px", textAlign: "left"}}>
                            Olá <strong>{name}</strong>,
                        </Text>

                        <Text style={{ 
                                    fontSize: "18px",
                                    lineHeight: "30px", 
                                    fontFamily: "var(--font-cormorant)",
                                    marginLeft: "10px", 
                                    textAlign: "left"
                                }}>
                            Há séculos, os navegadores partiam sem saber o que encontrariam além do horizonte.
                        </Text>
                        <Text style={{ 
                                    fontSize: "18px",
                                    lineHeight: "15px", 
                                    fontFamily: "var(--font-cormorant)",
                                    marginLeft: "10px", 
                                    textAlign: "left"
                                }}>
                            Hoje, convidamo-lo a fazer parte de uma nova viagem.
                        </Text>
                        <Text style={{ 
                                    fontSize: "18px",
                                    lineHeight: "20px", 
                                    fontFamily: "var(--font-cormorant)",
                                    marginLeft: "10px", 
                                    textAlign: "left"
                                }}>
                            A sua inscrição foi registada com sucesso e o seu lugar está reservado entre os primeiros a descobrir a Aromethos.
                        </Text>
                        <Text style={{ 
                                    fontSize: "18px",
                                    lineHeight: "20px", 
                                    fontFamily: "var(--font-cormorant)",
                                    marginLeft: "10px", 
                                    textAlign: "left"
                                }}>
                            Em breve revelaremos as nossas primeiras coleções, histórias e aromas.
                        </Text>

                        <Text style={{ 
                                    fontSize: "28px",
                                    lineHeight: "30px",
                                    textAlign: "center"
                                }}>
                            ✦
                        </Text>
                        <Text style={{ 
                                    fontSize: "18px",
                                    lineHeight: "20px", 
                                    fontFamily: "var(--font-cormorant)",
                                    marginLeft: "10px", 
                                    textAlign: "left"
                                }}>
                            Até lá…
                        </Text>
                        <Text style={{ 
                                    fontSize: "18px",
                                    lineHeight: "20px", 
                                    fontFamily: "var(--font-cormorant)",
                                    marginLeft: "10px", 
                                    textAlign: "left"
                                }}>
                            Continuamos a navegar em busca do Sabor da História.
                        </Text>
                        <Text style={{ 
                                    fontSize: "18px",
                                    lineHeight: "20px", 
                                    fontFamily: "var(--font-cormorant)",
                                    marginLeft: "10px", 
                                    textAlign: "left"
                                }}>
                            Equipa Aromethos.
                        </Text>
                </Container>
            </Body>
        </Html>
    )
}