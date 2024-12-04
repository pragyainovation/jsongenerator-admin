import { useState, useEffect } from 'react';
import InputField from './inputField/InputField';
import Button from './button/Button';

const Otp = ({ digitCount = 6, timerDuration = 300, callback }) => {
  const [otp, setOtp] = useState(Array(digitCount).fill(''));
  const [timer, setTimer] = useState(timerDuration);
  const [canResend, setCanResend] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input
      if (value && index < digitCount - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const onSubmit = (e) => {
    const buttonName = e?.target?.name;
    switch (buttonName) {
      case 'submit': {
        callback(buttonName, otp.join(''));
        return;
      }
      case 'resend': {
        setOtp(Array(digitCount).fill('')); // Clear OTP
        setTimer(timerDuration); // Reset Timer
        setCanResend(false);
        // Simulate API call for OTP resend
        callback(buttonName);
        return;
      }
      default: {
        console.error('Otp, Action not recognized!');
      }
    }
  };

  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="otp-system">
      <h3>Enter OTP</h3>
      <div className="otp-inputs flex gap-1">
        {otp.map((digit, index) => (
          <InputField
            key={index}
            id={`otp-${index}`}
            maxLength="1"
            inputClassName="text-center"
            value={digit}
            placeholder=""
            onChange={(e) => handleOtpChange(e.target.value, index)}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && !otp[index] && index > 0) {
                document.getElementById(`otp-${index - 1}`).focus();
              }
            }}
          />
        ))}
      </div>
      <div className="timer flex my-1 justify-center">{timer > 0 ? <span>Time left: {formatTimer()}</span> : <span>Time expired. Please resend OTP.</span>}</div>
      <div className="flex gap-2 w-full justify-center">
        <Button text={'Submit OTP'} name="submit" onClick={onSubmit} disabled={otp.includes('') || canResend} className="w-full" />
        <Button text={'Resend OTP'} name="resend" onClick={onSubmit} disabled={!canResend && otp !== ''} className="w-full" />
      </div>
    </div>
  );
};

export default Otp;
