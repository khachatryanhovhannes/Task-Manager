import { Button } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"



function SignUpButton() {
    const navigate = useNavigate()
    const {t} = useTranslation()

    return (
        <Button
            as={'a'}
            cursor={'pointer'}
            border={'2px solid orange'}
            onClick={() => navigate('/signup')}
        >{t('MAIN.SIGN_UP')}</Button>
    )
}

export default SignUpButton