import { useState, useEffect, useCallback } from 'react';
import SearchBar from '../SearchBar';
import DevForm from '../DevForm';
import GridContainer from '../CardsGrid';
import { DashboardContainer } from './styles';
import { getAllDevs, searchDevs } from '../../services/backendApi';
import type { Developer } from '../../services/types';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [devs, setDevs] = useState<Developer[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const fetchDevs = useCallback(async (term?: string) => {
        setLoading(true);
        setError(null);
        try {
            let fetchedData: Developer[] | null;
            if (term && term.trim() !== '') {
                fetchedData = await searchDevs(term);
            } else {
                fetchedData = await getAllDevs();
            }

            if (fetchedData) {
                setDevs(fetchedData);
            } else {
                setDevs([]);
                if (term && term.trim() !== '') {
                    setError(`No developers found matching "${term}".`);
                } else {
                    setError('No developers found in the database.');
                }
            }
        } catch (error: any) {
            setError(error.message || 'Failed to load developers.');
            setDevs([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDevs();
    }, [fetchDevs]);

    const handleSearchClick = () => {
        fetchDevs(searchTerm);
    };

    const handleDevFormSubmitSuccess = useCallback(() => {
        fetchDevs(searchTerm);
    }, [fetchDevs, searchTerm]);

    const handleCardClick = useCallback(
        (id: string) => {
            navigate(`/profile/${id}`);
        },
        [navigate],
    );

    return (
        <DashboardContainer>
            <SearchBar
                searchTerm={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        handleSearchClick();
                    }
                }}
                onClick={handleSearchClick}
                loading={loading}
                buttonDisabled={loading}
            />

            <DevForm onFormSubmitSuccess={handleDevFormSubmitSuccess} />

            {loading && (
                <p style={{ color: 'var(--color-primary)', textAlign: 'center' }}>
                    Loading developers...
                </p>
            )}
            {error && (
                <p style={{ color: 'var(--color-danger)', textAlign: 'center' }}>Error: {error}</p>
            )}

            {!loading && !error && devs.length === 0 && (
                <p style={{ color: 'var(--color-text-low)', textAlign: 'center' }}>
                    {searchTerm
                        ? `No developers found matching "${searchTerm}".`
                        : 'No developers to display. Add one using the form above!'}
                </p>
            )}
            {!loading && !error && devs.length > 0 && (
                <GridContainer devs={devs} onCardClick={handleCardClick} />
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
