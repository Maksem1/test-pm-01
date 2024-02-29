import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
	const [loginInfo, setLoginInfo] = useState({ name: '', password: '' });
	const [errorLoginInfo, setErrorLoginInfo] = useState('');
	const navigate = useNavigate();

	const checkLoginInfo = () => {
		if (loginInfo.name === '12345' && loginInfo.password === '12345') {
			navigate('/list');
		} else {
			setErrorLoginInfo('Неверный пароль');
		}
	};

	return (
		<form className='authorization' onSubmit={(e) => e.preventDefault()}>
			
			<input
				value={loginInfo.name}
				onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
				
			/>
			<input
				value={loginInfo.password}
				onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
				
			/>
			<button onClick={checkLoginInfo} >
				Войти
			</button>
			{errorLoginInfo ? (
				<p
					style={{
						margin: 'auto',
						
					}}>
					{errorLoginInfo}
				</p>
			) : (
				''
			)}
		</form>
	);
};

export default Authorization;
