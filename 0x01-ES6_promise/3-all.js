import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const [promise1, promise2] = [uploadPhoto(), createUser()];

  Promise.all([promise1, promise2])
    .then((responses) => {
      const [response1, response2] = responses;
      console.log(`${response1.body} ${response2.firstName} ${response2.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
