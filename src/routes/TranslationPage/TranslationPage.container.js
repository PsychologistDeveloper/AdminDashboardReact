import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { sortTranslationsByDate } from 'Utils/Translations';

import { getPortionForTranslation } from 'Store/Translations/Translations.dispatcher';

import TranslationPageComponent from './TranslationPage.component';

export const mapStateToProps = (state) => ({
    questionsDocs: state.TranslationsReducer.questionsDocs,
    questions: state.TranslationsReducer.questions,
    isLoading: state.TranslationsReducer.isLoading,
    isAllLoaded: state.TranslationsReducer.isAllLoaded,
});

export const mapDispatchToProps = (dispatch) => ({
    getPortionForTranslation: (docs, isInitial) => getPortionForTranslation(dispatch, docs, isInitial)
});


export const TranslationPageContainer = (props) => {
    const { getPortionForTranslation, questionsDocs, questions } = props;

    useEffect(() => {
        getNextPortion(questionsDocs, true);
    }, []);

    function getNextPortion(isInitial) {
        getPortionForTranslation(questionsDocs, isInitial);
    }

    const containerProps = () => {
        const sortedQsts = sortTranslationsByDate(questions);

        return {
            ...props,
            questions: sortedQsts
        };
    }

    const containerFunctions = {
        getNextPortion
    }

    return <TranslationPageComponent
      { ...containerProps() }
      { ...containerFunctions }
    />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslationPageContainer);
