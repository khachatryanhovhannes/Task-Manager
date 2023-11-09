import { Button } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"



function SignInButton() {
    const navigate = useNavigate()
    const {t} = useTranslation()

    return (
        <Button as={'a'}
            border={'2px solid white'}
            bg={'orange'}
            mb={4}
            cursor={'pointer'}
            onClick={() => navigate('/signin')}
        >{t('MAIN.SIGN_IN')}</Button>
    )
}

export default SignInButton