import React, { useCallback, useEffect, useState } from 'react';
import StackBadge from '../StackBadge';
import {
    ProfileContainer,
    PersonalInfoContainer,
    InfoTitle,
    InfoDetail,
    InfoStackContainer,
} from './styles';
import { getDevById } from '../../services/backendApi';
import { useParams } from 'react-router-dom';
import type { Developer } from '../../services/types';

const Profile = () => {
    const { id } = useParams<{ id: string }>();
    const [developer, setDeveloper] = useState<Developer | null>(null);

    const calculateAge = useCallback((birthDateString: string | undefined): string => {
        if (!birthDateString) return 'N/A';
        try {
            const birthDate = new Date(birthDateString);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age.toString();
        } catch (e) {
            return 'Invalid Date';
        }
    }, []);

    const fetchDeveloper = useCallback(async () => {
        if (!id) {
            setDeveloper(null);
            return;
        }

        try {
            const data = await getDevById(id);
            if (data) {
                setDeveloper({ ...data, id: data.id || data.id });
            } else {
                setDeveloper(null);
            }
        } catch (err: unknown) {
            setDeveloper(null);
        }
    }, [id]);

    useEffect(() => {
        fetchDeveloper();
    }, [fetchDeveloper]);

    if (!developer) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', color: 'var(--color-text-low)' }}>
                No developer data available.
            </div>
        );
    }

    const age = calculateAge(developer.birth_date);
    const stacks = developer.stack;

    return (
        <ProfileContainer>
            <PersonalInfoContainer>
                <InfoTitle>Full name</InfoTitle>
                <InfoDetail>{developer.name}</InfoDetail>
            </PersonalInfoContainer>
            <PersonalInfoContainer>
                <InfoTitle>Age</InfoTitle>
                <InfoDetail>{age}</InfoDetail>
            </PersonalInfoContainer>
            <InfoStackContainer>
                <InfoTitle>Teck Stack</InfoTitle>
                {stacks && stacks.length > 0 ? (
                    stacks.map(s => <StackBadge key={s} stackName={s} variant={'card'} />)
                ) : (
                    <InfoDetail>No stacks defined.</InfoDetail>
                )}
            </InfoStackContainer>
        </ProfileContainer>
    );
};

export default Profile;
